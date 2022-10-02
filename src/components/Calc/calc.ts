import environment from '../../environment/environment';
import fillInputTrack from '../../utils/utils';
import './calc.scss';

class Calc {
  price: number;

  fee: number;

  term: number;

  feeCalculated: number;

  sum: number;

  payment: number;

  constructor() {
    this.price = environment.priceDefault;
    this.fee = environment.feeDefault;
    this.term = environment.termDefault;
    this.feeCalculated = this.calcInitialFee();
    this.payment = this.calcOutputPayment();
    this.sum = this.calcOutputSum();
  }

  listenInput(target: HTMLInputElement): void {
    this.rangeInputHander(target);
    this.textInputHandler(target);
    fillInputTrack(target);
  }

  listenClick(target: HTMLElement): void {
    this.submitRequest(target);
  }

  rangeInputHander(target: HTMLInputElement): void {
    if (!target.id.includes('Range')) return;
    const targetId = target.id;
    const groupParentElement = document.getElementById(targetId)?.parentElement;
    const textInputElement = groupParentElement?.querySelector('.field__input') as HTMLInputElement;
    if (target.id === 'feeRange') {
      textInputElement.value = `${target.value}%`;
    } else {
      textInputElement.value = target.value;
    }

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
    this.renderInitialFee();
    this.renderOutputPayment();
    this.renderOutputSum();
  }

  textInputHandler(target: HTMLInputElement): void {
    if (!target.id.includes('Text')) return;
    switch (target.name) {
      case 'price':
        this.price = Number(target.value) > environment.priceMax
          ? environment.priceMax : Number(target.value);
        break;
      case 'fee':
        this.fee = parseInt(target.value, 10) > environment.feeMax
          ? environment.feeMax : parseInt(target.value, 10) || 0;
        break;
      case 'term':
        this.term = Number(target.value) > environment.termMax
          ? environment.termMax : Number(target.value);
        break;
      default:
        break;
    }
    this.renderInitialFee();
    this.renderOutputPayment();
    this.renderOutputSum();
  }

  async submitRequest(target: HTMLElement) {
    if (target.id !== 'submitRequest' || target.classList.contains('disabled')) return;

    target.classList.add('disabled');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', 'application/json');

    const raw = JSON.stringify({
      price: this.price,
      fee: this.fee,
      term: this.term,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    await fetch(environment.baseUrl, requestOptions);
    target.classList.remove('disabled');
  }

  calcInitialFee(): number {
    const feeCalculated = Math.round(this.price * (this.fee / 100));
    return feeCalculated;
  }

  calcOutputSum(): number {
    const sum = this.feeCalculated + (this.term * this.payment);
    return sum;
  }

  calcOutputPayment(): number {
    const interestRate = environment.interestRate / 100;

    const payment = (this.price - this.feeCalculated)
      * (
        (interestRate * ((1 + interestRate) ** this.term))
        / (((1 + interestRate) ** this.term) - 1)
      );

    return payment;
  }

  renderInitialFee(): void {
    const feeCalculated = document.getElementById('feeCalculated') as HTMLElement;
    this.feeCalculated = this.calcInitialFee();
    feeCalculated.innerText = String(Math.round(this.feeCalculated));
  }

  renderOutputPayment() {
    const outputPayment = document.getElementById('outputPayment') as HTMLElement;
    this.payment = this.calcOutputPayment();
    outputPayment.innerHTML = `${String(Math.round(this.payment))} <span>₽</span>`;
  }

  renderOutputSum() {
    const outputSum = document.getElementById('outputSum') as HTMLElement;
    this.sum = this.calcOutputSum();
    outputSum.innerHTML = `${String(Math.round(this.sum))} <span>₽</span>`;
  }

  render() {
    const main = document.querySelector('.page-content');
    const pricePercentage = ((this.price - environment.priceMin)
    / (environment.priceMax - environment.priceMin)) * 100;
    const feePercentage = ((this.fee - environment.feeMin)
    / (environment.feeMax - environment.feeMin)) * 100;
    const termPercentage = ((this.term - environment.termMin)
    / (environment.termMax - environment.termMin)) * 100;
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
              <input type="range" class="field__range" id="priceRange" value="${this.price}" min="${environment.priceMin}" max="${environment.priceMax}" style="background-image: linear-gradient(90deg, #FF9514 ${pricePercentage}%, transparent ${pricePercentage}%)">
            </div>
            <div class="form__field">
              <label for="fee" class="field__label">Первоначальный взнос</label>
              <div class="field__wrapper">
                <div class="field__text" id="feeCalculated">${this.feeCalculated}</div>
                <input type="text" value="${this.fee}%" name="fee" class="field__unit field__text field__input fee-unit" id="feeText">
              </div>
              <input type="range" class="field__range" id="feeRange" value="${this.fee}"min="${environment.feeMin}" max="${environment.feeMax}" style="background-image: linear-gradient(90deg, #FF9514 ${feePercentage}%, transparent ${feePercentage}%)">
            </div>
            <div class="form__field">
              <label for="term" class="field__label">Срок лизинга</label>
              <div class="field__wrapper">
                <input type="number" name="term" class="field__text field__input" id="termText" value="${this.term}">
                <div class="field__unit term-unit">мес.</div>
              </div>
              <input type="range" class="field__range" id="termRange" value="${this.term}" min="${environment.termMin}" max="${environment.termMax}" style="background-image: linear-gradient(90deg, #FF9514 ${termPercentage}%, transparent ${termPercentage}%)">
            </div>
          </form>
          <div class="calc__result">
            <div class="result">
              <div class="result__label" >
                Сумма договора лизинга
              </div>
              <div class="result__output" id="outputSum">
                ${Math.round(this.sum)} <span>₽</span>
              </div>
            </div>
            <div class="result">
              <div class="result__label">
                Ежемесячный платеж от
              </div>
              <div class="result__output" id="outputPayment">
                ${Math.round(this.payment)} <span>₽</span>
              </div>
            </div>
            <button type="button" class="submit" id="submitRequest">Оставить заявку</button>
          </div>
        </section>
      `;
    }
  }
}

export default Calc;
