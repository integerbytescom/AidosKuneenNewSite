export const checkAdmin = () =>{
    const path = window.location.pathname;
    const ss = window.sessionStorage.getItem('admin')
    const ls = window.localStorage.getItem('admin')
    return Boolean((ss || ls) && path.includes('/admin/success'))
}