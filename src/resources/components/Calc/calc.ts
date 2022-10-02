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
              <label for="price" class="field__label">Стоимость автомобиля</label>
              <div class="field__wrapper">
                <input type="text" name="price" class="field__text">
                <div class="field__unit price-unit">₽</div>
              </div>
              <input type="range" class="field__range">
            </div>
            <div class="form__field">
              <label for="fee" class="field__label">Первоначальный взнос</label>
              <div class="field__wrapper">
                <input type="text" name="fee" class="field__text">
                <div class="field__unit fee-unit">10%</div>
              </div>
              <input type="range" class="field__range">
            </div>
            <div class="form__field">
              <label for="term" class="field__label">Срок лизинга</label>
              <div class="field__wrapper">
                <input type="text" name="term" class="field__text">
                <div class="field__unit term-unit">мес.</div>
              </div>
              <input type="range" class="field__range">
            </div>
          </form>
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
            <button type="button" class="submit">Оставить заявку</button>
          </div>
        </section>
      `;
    }
  }
}

export default Calc;
