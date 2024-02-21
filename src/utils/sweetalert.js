import Swal from "sweetalert2";

export const successAlert = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "success",
  });
};
export const errorAlert = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "error",
  });
};
export const warningAlert = (title, text) => {
  Swal.fire({
    title,
    text,
    icon: "warning",
  });
};
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 1000,
  timerProgressBar: true,
  showConfirmButton: false,
});

export const toastSuccess = (title = "成功") => {
  Toast.fire({
    icon: "success",
    title,
  });
};
