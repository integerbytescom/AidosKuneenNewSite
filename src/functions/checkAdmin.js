export const checkAdmin = () =>{
    const path = window.location.pathname;
    const ss = window.sessionStorage.getItem('admin')
    return Boolean(ss === 'true' && path.includes('/admin/success'))
}