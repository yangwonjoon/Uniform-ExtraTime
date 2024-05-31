import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import SignUp from '@/page/signup/SignUp'
import SellerSignUp from '@/page/signup/SellerSignUp'
import CustomerSignUp from '@/page/signup/CustomerSignUp'
import Login from '@/page/login/Login'
import Home from '@/page/product/Home'
import Team from '@/page/product/Team'
import Sell from '@/page/sell/Sell'
import ProductDetail from '@/page/product/ProductDetail'
import Mypage from '@/page/mypage/MyPage'
import UpdateProduct from '@/page/sell/UpdateProduct'
import CreateProduct from '@/page/sell/CreateProduct'
import existedCartState from '@/api/cart/existedCartState'
import Layout from '@/routes/Layout'
import AuthLayout from '@/routes/AuthLayout'

const queryClient = new QueryClient()

const App = () => {
  existedCartState()

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
