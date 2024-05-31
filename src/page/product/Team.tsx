import { useEffect, useState } from 'react'
import teams from '@/constants/team'
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/firebase'
import { IProductFormData } from '@/types/types'
import ProductView from '@/components/product/ProductView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'

const Team = () => {
  const [products, setProducts] = useState<IProductFormData[]>([])
  const [teamSelected, setTeamSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)

  const handleExpandedToggle = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    const readTeamProducts = async () => {
      const productsRef = collection(db, 'products')
      const q = query(
        productsRef,
        where('isSell', '==', false),
        where('productCategory', '==', teamSelected),
        orderBy('createdAt', 'desc'),
      )
      try {
        const querySnapshot = await getDocs(q)
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          productId: doc.id,
          ...(doc.data() as IProductFormData),
        }))
        setProducts(fetchedProducts)
      } catch (error) {
        console.log('readTeamProducts 에러')
      }
    }
    readTeamProducts()
  }, [teamSelected])

  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 gap-4 mt-10">
        {teams.slice(0, expanded ? teams.length : 4).map((team) => (
          <div key={team.id} className="text-center">
            <button
              type="button"
              className="text-sm text-gray-500 cursor-pointer font-bold bg-transparent border-none p-0 m-0"
              onClick={() => setTeamSelected(team.id)}
            >
              #{team.koreanName}
            </button>
          </div>
        ))}
      </div>
      <div className="text-right mt-4 mr-4">
        {teams.length > 4 && (
          <button
            type="button"
            className="text-sm"
            onClick={handleExpandedToggle}
          >
            {expanded ? (
              <FontAwesomeIcon icon={faCircleUp} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faCircleDown} size="lg" />
            )}
          </button>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {products ? (
          products.map((product) => (
            <ProductView product={product} key={product.productId} />
          ))
        ) : (
          <div className="">
            <p>팀을 선택해주세요</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Team
