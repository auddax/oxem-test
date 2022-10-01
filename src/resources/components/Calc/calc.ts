/* eslint-disable class-methods-use-this */
import './calc.scss';

class Calc {
  render() {
    const main = document.querySelector('.page-content');
    if (main) {
      main.innerHTML = `
        <section class="calc">
          <form class="calc__form">
            <div class="form__field">
              <label for="price">Стоимость автомобиля</label>
              <input type="text" name="price">
              <input type="range">
            </div>
            <div class="form__field">
              <label for="fee">Первоначальный взнос</label>
              <input type="text" name="fee">
              <input type="range">
            </div>
            <div class="form__field">
              <label for="term">Срок лизинга</label>
              <input type="text" name="term">
              <input type="range">
            </div>
          </form>
          <div class="row">
            <div class="calc__result">
              <div class="result">
                <div class="result__label">
                  Сумма договора лизинга
                </div>
                <div class="result__output" id="outputSum">
                </div>
              </div>
              <div class="result">
                <div class="result__label">
                  Ежемесячный платеж от
                </div>
                <div class="result__output" id="outputPayment">
                </div>
              </div>
            </div>
            <button type="button" class="calc__submit">Оставить заявку</button>
          </div>
        </section>
      `;
    }
  }
}

export default Calc;
