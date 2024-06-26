import cartStore from '@/store/cartStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons'
import {
  faBookmark as filledBookmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import userStore from '@/store/userStore'
import {
  doc as firebaseDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import { db } from '@/firebase'
import { IProductFormData } from '@/types/types'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useNavigate } from 'react-router-dom'

const Mypage = () => {
  const { user } = userStore()
  const { cart, addCart, removeCart } = cartStore()
  const [cartProducts, setCartProducts] = useState<IProductFormData[]>([])
  const [orderProducts, setOrderProducts] = useState<IProductFormData[]>([])
  const [sellOrderProducts, setSellOrderProducts] = useState<
    IProductFormData[]
  >([])
  const navigate = useNavigate()

  const handleToggleCart = (
    productId: string | undefined,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation()
    if (!productId) {
      alert('제품 정보가 올바르지 않습니다.')
      return
    }
    if (user.email && !user.isSeller) {
      if (cart.includes(productId)) {
        removeCart(productId)
      } else {
        addCart(productId)
      }
    } else {
      alert('구매자 아이디로 로그인해주세요!')
    }
  }

  useEffect(() => {
    const productFromCart = async () => {
      if (!user.uid) return
      const productArr = await Promise.all(
        cart.map(async (productId) => {
          const docRef = firebaseDoc(db, 'products', productId)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists() && !docSnap.data().isSell) {
            return {
              ...docSnap.data(),
              productId: docSnap.id,
            } as IProductFormData
          }
          return null
        }),
      )
      setCartProducts(productArr.filter(Boolean) as IProductFormData[])
    }
    productFromCart()
  }, [cart, user.uid])

  useEffect(() => {
    const productFromOrders = async () => {
      if (!user.uid) return
      const ordersRef = collection(db, 'orders')
      const q = query(ordersRef, where('buyerId', '==', user.email))
      const ordersQuerySnapshot = await getDocs(q)
      const productIds = ordersQuerySnapshot.docs.map(
        (doc) => doc.data().productId,
      )
      const productDetails = await Promise.all(
        productIds.map(async (id) => {
          const productRef = firebaseDoc(db, 'products', id)
          const productSnap = await getDoc(productRef)
          if (productSnap.exists()) {
            return {
              ...productSnap.data(),
              productId: id,
            } as IProductFormData
          }
          return null
        }),
      )
      setOrderProducts(productDetails.filter(Boolean) as IProductFormData[])
    }
    productFromOrders()
  }, [user.uid, user.email])

  useEffect(() => {
    const productFromSellerId = async () => {
      if (!user.uid) return
      const ordersRef = collection(db, 'orders')
      const q = query(ordersRef, where('sellerId', '==', user.email))
      const ordersQuerySnapshot = await getDocs(q)
      const productIds = ordersQuerySnapshot.docs.map(
        (doc) => doc.data().productId,
      )
      const productDetails = await Promise.all(
        productIds.map(async (id) => {
          const productRef = firebaseDoc(db, 'products', id)
          const productSnap = await getDoc(productRef)
          if (productSnap.exists()) {
            return {
              ...productSnap.data(),
              productId: id,
            } as IProductFormData
          }
          return null
        }),
      )
      setSellOrderProducts(productDetails.filter(Boolean) as IProductFormData[])
    }
    productFromSellerId()
  }, [user.uid, user.email])

  return (
    <div>
      <div className="w-full h-32 my-5 mt-10 flex flex-start items-center">
        <FontAwesomeIcon icon={faUser} size="3x" className="basis-1/5" />
        <div className="basis-4/5 font-bold">
          <h1 className="mb-4">
            {user.isSeller ? <div>Seller</div> : <div>Buyer</div>}
          </h1>
          <h1>Name: {user.name}</h1>
          <h1>Nickname: {user.nickname}</h1>
        </div>
      </div>
      {user.isSeller ? (
        <div className="w-full p-3">
          <h1 className="text-lg font-bold mb-5">판매 내역</h1>
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
              {sellOrderProducts.map((product) => (
                <CarouselItem
                  key={product.productId}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                        <div
                          className="mx-auto mb-3 w-48 h-72 overflow-hidden"
                          onClick={() => navigate(`/${product.productId}`)}
                        >
                          <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                            <img
                              src={product.productImages[0]}
                              alt="메인 이미지"
                              className="object-contain h-full"
                            />
                          </div>
                          <div className="flex flex-col p-3">
                            <h1 className="text-sm font-bold mb-1">
                              {product.productName}
                            </h1>
                            <p className="text-sm font-semibold">
                              {product.productPrice}원
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {orderProducts.length > 3 && <CarouselPrevious />}
            {orderProducts.length > 3 && <CarouselNext />}
          </Carousel>
        </div>
      ) : (
        <div className="w-full p-3">
          <h1 className="text-lg font-bold mb-5">구매 내역</h1>
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
              {orderProducts.map((product) => (
                <CarouselItem
                  key={product.productId}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                        <div
                          className="mx-auto mb-3 w-48 h-72 overflow-hidden"
                          onClick={() => navigate(`/${product.productId}`)}
                        >
                          <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                            <img
                              src={product.productImages[0]}
                              alt="메인 이미지"
                              className="object-contain h-full"
                            />
                          </div>
                          <div className="flex flex-col p-3">
                            <h1 className="text-sm font-bold mb-1">
                              {product.productName}
                            </h1>
                            <p className="text-sm font-semibold">
                              {product.productPrice}원
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {orderProducts.length > 3 && <CarouselPrevious />}
            {orderProducts.length > 3 && <CarouselNext />}
          </Carousel>
        </div>
      )}

      {!user.isSeller && (
        <div className="w-full p-3">
          <h1 className="text-lg font-bold mb-5">관심 상품</h1>
          <Carousel opts={{ align: 'start' }} className="w-full">
            <CarouselContent>
              {cartProducts.map((product) => (
                <CarouselItem
                  key={product.productId}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                        <div
                          className="mx-auto mb-3 w-48 h-72 overflow-hidden"
                          onClick={() => navigate(`/${product.productId}`)}
                        >
                          <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                            <img
                              src={product.productImages[0]}
                              alt="메인 이미지"
                              className="object-contain h-full"
                            />
                            {product.productId &&
                            cart.includes(product.productId) ? (
                              <FontAwesomeIcon
                                icon={filledBookmark}
                                className="absolute bottom-0 right-0 m-2"
                                onClick={(e) =>
                                  handleToggleCart(product.productId, e)
                                }
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={bookmark}
                                className="absolute bottom-0 right-0 m-2"
                                onClick={(e) =>
                                  handleToggleCart(product.productId, e)
                                }
                              />
                            )}
                          </div>
                          <div className="flex flex-col p-3">
                            <h1 className="text-sm font-bold mb-1">
                              {product.productName}
                            </h1>
                            <p className="text-sm font-semibold">
                              {product.productPrice}원
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {cartProducts.length > 3 && <CarouselPrevious />}
            {cartProducts.length > 3 && <CarouselNext />}
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default Mypage
