import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from '@/page/product/Home'
import Team from '@/page/product/Team'
import ProductDetail from '@/page/product/ProductDetail'
import existedCartState from '@/api/cart/existedCartState'
import Layout from '@/routes/Layout'
import AuthLayout from '@/routes/AuthLayout'

const SignUp = lazy(() => import('@/page/signup/SignUp'))
const SellerSignUp = lazy(() => import('@/page/signup/SellerSignUp'))
const CustomerSignUp = lazy(() => import('@/page/signup/CustomerSignUp'))
const Login = lazy(() => import('@/page/login/Login'))
const Sell = lazy(() => import('@/page/sell/Sell'))
const Mypage = lazy(() => import('@/page/mypage/MyPage'))
const UpdateProduct = lazy(() => import('@/page/sell/UpdateProduct'))
const CreateProduct = lazy(() => import('@/page/sell/CreateProduct'))

const queryClient = new QueryClient()

const App = () => {
  existedCartState()

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:productId" element={<ProductDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/sell/createProduct" element={<CreateProduct />} />
            <Route
              path="/sell/updateProduct/:productId"
              element={<UpdateProduct />}
            />
            <Route path="/mypage" element={<Mypage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/seller" element={<SellerSignUp />} />
            <Route path="/signup/customer" element={<CustomerSignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
