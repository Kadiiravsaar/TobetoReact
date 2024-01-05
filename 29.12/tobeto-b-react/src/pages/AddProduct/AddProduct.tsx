import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { number, object, string } from 'yup';
import FormikInput from '../../components/FormikInput/FormikInput';

type Props = {}

const AddProduct = (props: Props) => {

    const initValue ={
        title:"",
        description :"",
        price:0,
        stock:0,
    }
    const validSchema = object({
        title: string().required("Başlık alanı zorunludur.").min(3, "Başlık alanı en az 3 karakter olmalıdır.")
        .max(50,"Başlık alanı en fazla 50 karakter olmalıdır.")
        .test("my-custom-rule","En az 1 küçük , 1 küçük ve rakam içermemektedir",(value,context)=>{
            return /[a-z]/.test(value) && /[A-Z]/.test(value) &&/[0-9]/.test(value);
            }),
        description: string().required().min(5).max(300),
        price: number().required().min(0),
        stock: number().required().min(0).integer(),
    })

  return (
    <div className="container mt-5">
        <Formik initialValues={initValue} onSubmit={(values)=>{console.log(values);}}
         validationSchema = {validSchema}>
			<Form>
			
                <FormikInput name='title' type='text' label='Ürün Adı' placeholder='Ürün adı giriniz..'></FormikInput>
                <FormikInput name='description' type='text' label='Ürün Açıklaması' placeholder='yazzz'></FormikInput>
                <FormikInput name='price' type='number' label='Ürün Fiyatı'></FormikInput>
                <FormikInput name='stock' type='number' label='Ürün stoğu' ></FormikInput>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</Form>
            </Formik>
		</div>
  )
} 

export default AddProduct