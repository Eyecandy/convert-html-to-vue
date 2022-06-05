import moment from "moment";
class PriceRequestOrderService {


    addExtraFields(priceRequestOrders) {
        return priceRequestOrders.map((priceRequestOrder) =>
            this.updatePriceRequestDeadline(priceRequestOrder)
        );
    }

    updatePriceRequestDeadline(priceRequestOrder) {
        priceRequestOrder["deadlineReached"] = this.setDeadlineStatus(
            priceRequestOrder.priceRequest.deadline
        );
        return priceRequestOrder;
    }

    setDeadlineStatus(deadline) {
        var date = moment(deadline);
        var now = moment();
        return now > date;
    }

}
export default new PriceRequestOrderService();