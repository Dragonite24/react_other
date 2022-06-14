import React from 'react'
import * as Yup from 'yup'
import { Formik, Form as FormikForm, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

import { Page } from 'app/templates/Page'
import { styled } from 'ui/styles'
import { useForm } from 'app/shared/hooks'
import { paths } from 'app/shared/router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

type FormData = {
  email: string
  password: string
}

const initialValues: FormData = {
  email: '',
  password: ''
}

export const Form: React.FC = () => {
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email'),
    password: Yup.string()
  })

  const onSubmit = async (formValues: FormData): Promise<void> => {
    console.log(validationSchema.isValid)

    if (formik.isValid) {
      navigate(paths.home)
    }
  }

  const formik = useForm<FormData>({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <Page>
      <Wrapper>
        <Formik onSubmit={formik.submitForm} initialValues={formik.initialValues}>
          <FormikForm>
            {Object.keys(formik.values).map((el, i) => (
              <>
                <label key={i} htmlFor={el}>
                  {el}
                </label>
                <Field key={el} id={el} name={el} placeholder={el} {...formik.values} />
              </>
            ))}

            <button type="submit">Submit</button>
          </FormikForm>
        </Formik>
      </Wrapper>
    </Page>
  )
}
