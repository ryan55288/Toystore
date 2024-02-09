import Swal from 'sweetalert2'

export const successAlert = (title,text) => {
  Swal.fire({
    title,
    text,
    icon: 'success'
  })
}
export const errorAlert = (title,text) => {
  Swal.fire({
    title,
    text,
    icon: 'error'
  })
}
export const warningAlert = (title,text) => {
  Swal.fire({
    title,
    text,
    icon: 'warning'
  })
}