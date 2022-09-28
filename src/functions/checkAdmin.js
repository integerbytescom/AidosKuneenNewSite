export const checkAdmin = () =>{
    const path = window.location.pathname;
    const ss = window.sessionStorage.getItem('admin')
    return Boolean(ss && path.includes('/admin/success'))
}