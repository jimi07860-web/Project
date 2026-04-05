import {getOrderData} from "../order/orderRepository.js"
import {productFind} from "../product/productRepository.js"
import {getUserbyCond} from "../auth/authRepository.js"


const getData= async() => {
const [order, product, user]= await Promise.all(
    [getOrderData(), productFind(), getUserbyCond()])
    return {user, product, order}
}

export default getData