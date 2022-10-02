/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import environment from '../../environment/environment';
import './calc.scss';

class Calc {
  price: number;

  fee: number;

  feeCalculated: number;

  term: number;

  constructor() {
    this.price = environment.priceDefault;
    this.fee = environment.feeDefault;
    this.feeCalculated = this.fee * this.price;
    this.term = environment.termDefault;
  }

  listenInput(target: HTMLInputElement): void {
    this.rangeInputHander(target);
    this.textInputHandler(target);
  }

  rangeInputHander(target: HTMLInputElement): void {
    if (!target.id.includes('Range')) return;
    const targetId = target.id;
    const groupParentElement = document.getElementById(targetId)?.parentElement;
    const textInputElement = groupParentElement?.querySelector('.field__input') as HTMLInputElement;
    // if (target.id === 'feeRange') {
    //   textInputElement.value = `${target.value}%`;
    // } else {
    //   textInputElement.value = target.value;
    // }

    const priceInput = document.getElementById('priceText') as HTMLInputElement;
    const feeInput = document.getElementById('feeText') as HTMLInputElement;
    const rangeInput = document.getElementById('termText') as HTMLInputElement;

    switch (textInputElement.name) {
      case 'price':
        this.price = Number(target.value);
        priceInput.value = String(this.price);
        break;
      case 'fee':
        this.fee = Number(target.value);
        feeInput.value = `${target.value}%`;
        break;
      case 'term':
        this.term = Number(target.value);
        rangeInput.value = String(this.term);
        break;
      default:
        break;
    }
    this.calcInitialFee();
  }

  textInputHandler(target: HTMLInputElement): void {
    if (!target.id.includes('Text')) return;
    switch (target.name) {
      case 'price':
        this.price = Number(target.value);
        break;
      case 'fee':
        this.fee = parseInt(target.value, 10) || 0;
        break;
      case 'term':
        this.term = Number(target.value);
        break;
      default:
        break;
    }
    this.calcInitialFee();
  }

  calcInitialFee() {
    this.feeCalculated = this.fee * this.price;
    const feeCalculated = document.getElementById('feeCalculated') as HTMLElement;
    feeCalculated.innerText = String(this.feeCalculated);
  }

  render() {
    const main = document.querySelector('.page-content');
    if (main) {
      main.innerHTML = `
        <section class="calc">
          <form class="calc__form">
            <div class="form__field">
              <label for="price" class="field__label">Стоимость автомобиля</label>
              <div class="field__wrapper">
                <input type="number" name="price" class="field__text field__input" id="priceText" value="${this.price}">
                <div class="field__unit price-unit">₽</div>
              </div>
              <input type="range" class="field__range" id="priceRange" min="${environment.priceMin}" max="${environment.priceMax}">
            </div>
            <div class="form__field">
              <label for="fee" class="field__label">Первоначальный взнос</label>
              <div class="field__wrapper">
                <div class="field__text" id="feeCalculated">${this.feeCalculated}</div>
                <input type="text" value="${this.fee}%" name="fee" class="field__unit field__text field__input fee-unit" id="feeText">
              </div>
              <input type="range" class="field__range" id="feeRange" min="${environment.feeMin}" max="${environment.feeMax}">
            </div>
            <div class="form__field">
              <label for="term" class="field__label">Срок лизинга</label>
              <div class="field__wrapper">
                <input type="number" name="term" class="field__text field__input" id="termText" value="${this.term}">
                <div class="field__unit term-unit">мес.</div>
              </div>
              <input type="range" class="field__range" id="termRange" min="${environment.termMin}" max="${environment.termMax}">
            </div>
          </form>
          <div class="calc__result">
            <div class="result">
              <div class="result__label" >
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
