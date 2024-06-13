export default class Utils {
    static formatPrice(price: number): string {
        return `${Number(price).toLocaleString(undefined, {
          style: "currency",
          currency: "CAD" // todo: put store currency in a config file/state. For demo this is fine.
        })}`;
      }
}