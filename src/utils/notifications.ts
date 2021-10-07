import { toast, ToastOptions, TypeOptions } from 'react-toastify'

export function notify(type: TypeOptions, message: string) {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: 'dark'
  }

  if (type === 'success') return toast.success(message, options)
  if (type === 'error') return toast.error(message, options)
  if (type === 'warning') return toast.warn(message, options)
  if (type === 'info') return toast.info(message, options)
}
