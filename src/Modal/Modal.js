import './modal.css'
const Modal = ({ active, setacrive,children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setacrive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {children}
            </div>
        </div>
    )
}
export default Modal