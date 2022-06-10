import { FormikConfig, FormikContextType, FormikHelpers, FormikValues, useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

export type TField = {
  title: string
  error: string
  placeholder: string
}

const VALUES: TField[] = [
  {
    title: 'name',
    error: 'неверный name',
    placeholder: 'имя'
  },
  {
    title: 'phone',
    error: 'неверный телефон',
    placeholder: '123123123'
  },
  {
    title: 'email',
    error: 'неверный email',
    placeholder: 'email'
  }
]

type TInitialValues = {
  [field: string]: any
}

export const useForm = <Values>(
  params: FormikConfig<Values> & { showLoading?: boolean }
): FormikContextType<Values> => {
  const { showLoading = true, ...config } = params
  const form = useFormik<Values>(config)

  const {
    loading: { setLoading }
  } = useDispatch<Dispatch>()

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined): Promise<void> => {
    if (e && e.preventDefault && typeof e.preventDefault === 'function') {
      e.preventDefault()
    }

    if (e && e.stopPropagation && typeof e.stopPropagation === 'function') {
      e.stopPropagation()
    }
    showLoading && setLoading(true)
    await form.submitForm()
    showLoading && setLoading(false)
  }

  return { ...form, handleSubmit }
}
