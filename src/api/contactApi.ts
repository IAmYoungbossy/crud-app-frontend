export default class ContactAPI {
  public static async getAll() {
    const resp = await fetch("http://localhost:3001/contacts", {
      method: "Get",
    });
    const data = await resp.json();
    return data;
  }
}
