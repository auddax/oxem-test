/* eslint-disable class-methods-use-this */
import './calc.scss';

class Calc {
  render() {
    const main = document.querySelector('.page-content');
    if (main) {
      main.innerHTML = `
      <form>
        <input type="text">
      </form>
      `;
    }
  }
}

export default Calc;
