export default class Utils {

    // returns a locale formatted currency display string for a number
    static formatPrice(price: number): string {
        return `${Number(price).toLocaleString(undefined, {
          style: "currency",
          currency: "CAD" // todo: put store currency in a config file/state. For demo this is fine.
        })}`;
    }

    // returns the taxes on a provided sales value.
    // For demo purposes we use a hard coded tax of 13%
    static calculateTaxes(price: number): number {
      return price * 0.13;
    }
}