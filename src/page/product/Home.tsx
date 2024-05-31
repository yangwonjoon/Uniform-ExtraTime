import { useQuery } from '@tanstack/react-query'
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/firebase'
import { IProductFormData } from '@/types/types'
import ProductView from '@/components/product/ProductView'
import Loading from '@/components/common/Loading'
import Error from '@/components/common/Error'
import homeimage from '../../assets/homeimage.jpg'

const homePageProducts = async () => {
  const productsRef = collection(db, 'products')
  const q = query(
    productsRef,
    where('isSell', '==', false),
    orderBy('createdAt', 'desc'),
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => ({
    productId: doc.id,
    ...(doc.data() as IProductFormData),
  }))
}

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['HomePageProducts'],
    queryFn: homePageProducts,
    staleTime: 1000 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <Loading />
  if (error) return <Error />

  return (
    <div>
      <div
        className="w-full h-80 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${homeimage})` }}
      />
      <div className="container mx-auto my-5">
        <h1 className="font-bold text-xl">All products</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {products &&
            products.map((product) => (
              <ProductView product={product} key={product.productId} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
