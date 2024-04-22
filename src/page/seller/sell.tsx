import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { userStore } from "@/store/store";
import { Nav } from "@/components/common/nav";
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { IProduct } from "@/page/seller/IProduct";

export const Sell = () => {
    const navigate = useNavigate();
    const user = userStore(state => state.user);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!user || !user.email) return;

            const productsRef = collection(db, "products");
            const q = query(productsRef, where("user_email", "==", user.email));
            const querySnapshot = await getDocs(q);
            const fetchedProducts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data() as IProduct
            }));
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, [user]);

    return (
        <>
            <Nav />
            <button onClick={() => navigate('/sell/createProduct')}>Add Product</button>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Product Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Images</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.explain}</TableCell>
                                <TableCell className="text-right">
                                    {product.images.map((url, index) => (
                                        <img key={index} src={url} alt="Product" style={{ width: '50px', height: '50px' }} />
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};
