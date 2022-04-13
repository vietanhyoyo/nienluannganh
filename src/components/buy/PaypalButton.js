import { PayPalButtons } from "@paypal/react-paypal-js"

export default function PaypalButton(props) {
    const usd = 0.000044;
    const usdPrice = Math.round(props.donhang.tongtien * usd * 100) / 100;

    console.log(usdPrice);
    return (
        <div className='buy__payment__row buy__payment__row--right'>
            <div>
                <PayPalButtons
                    style={{
                        layout: 'horizontal',
                        height: 40
                    }}
                    onClick={(data, actions) => {
                        console.log('onclick');
                        const hasAlreadyBought = false;
                        if (hasAlreadyBought) {
                            alert('hasAlreadyBought');
                            return actions.reject();
                        }
                        else return actions.resolve();

                    }}
                    createOrder={((data, actions) => {
                        console.log('creacteOrder');
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: 'thanhtoancuahangongbay',
                                    amount: {
                                        value: usdPrice
                                    }
                                }
                            ]
                        });
                    })}
                    onApprove={async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log('order', order);
                        props.handlePay();
                        alert('Đã thanh toán xong! Cám ơn quý khách!');
                    }}
                    onCancel={() => {
                        alert('Đã hủy giao dịch');
                    }}
                    onError={err => {
                        alert('Có lỗi');
                        console.log('Paypal checkout error', err);
                    }}
                />
            </div>
        </div>
    )
}