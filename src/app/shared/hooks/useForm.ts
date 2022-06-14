import { FormikConfig, FormikContextType, useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'rootReducer'

import { loadingDisabled, loadingEnabled } from 'store/loading/actions'

export type TField = {
  title: string
  error: string
  placeholder: string
}

export const useForm = <Values>(
  params: FormikConfig<Values> & { showLoading?: boolean }
): FormikContextType<Values> => {
  const { showLoading = true, ...config } = params
  const form = useFormik<Values>(config)

  useSelector((state: RootState) => state.loading)
  const dispatch = useDispatch()

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined): Promise<void> => {
    console.log(1)

    if (e && e.preventDefault && typeof e.preventDefault === 'function') {
      e.preventDefault()
    }

    if (e && e.stopPropagation && typeof e.stopPropagation === 'function') {
      e.stopPropagation()
    }
    showLoading && dispatch(loadingEnabled())
    await form.submitForm()
    showLoading && dispatch(loadingDisabled())
  }

  return { ...form, handleSubmit }
}
