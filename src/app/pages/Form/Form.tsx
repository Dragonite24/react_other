import React from 'react'

import { Page } from 'app/templates/Page'
import { Formik, Form as FormikForm, Field, FormikProps } from 'formik'
import { styled } from 'ui/styles'
import { TField, useInput } from 'app/shared/hooks'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form: React.FC = () => {
  const formik = useInput()

  return (
    <Page>
      <Wrapper>
        <Formik onSubmit={formik.submitForm} initialValues={formik.initialValues}>
          <FormikForm>
            {formik.values.map((el) => (
              <Field>{el.title}</Field>
            ))}

            <button type="submit">Submit</button>
          </FormikForm>
        </Formik>
      </Wrapper>
    </Page>
  )
}
