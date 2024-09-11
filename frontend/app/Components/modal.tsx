interface Props {
    modalSx: string,
    sx: string,

    }

export default function Modal(props: Props) {
    console.log(props);

    return(
        <div className={props.modalSx}>
            <div className={props.sx}>
                <div className="">X</div>
                <img src="" alt="" />
                <h2>Produto Nome</h2>
                <h4>R$20.00</h4>
                <div>Button</div>
            </div>
        </div>
    )
}