// Code goes here
class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      
      this.tabData = document.querySelector(`.tab[data-tab='${this.tabElement.dataset.tab}']`); 
      console.log(this.tabData);
      
      
      if(this.tabData == document.querySelector(`.tab[data-tab='all']`)){
        this.cards = document.querySelectorAll('.card');
        console.log(this.cards);
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabElement.dataset.tab}']`); 
        console.log(this.cards)
      }
  
       this.cards = Array.from(this.cards).map(card => new TabCard(card));
       console.log(this.cards)
  
      this.tabElement.addEventListener('click', () => this.selectTab() );
    }
  
    selectTab(){
  
      const tabs = document.querySelectorAll('.tab');
      console.log(tabs);
      console.log(this.cards)
  
      tabs.forEach(tab => {
        tab.classList.remove('active-tab');
      })
      console.log(tabs);
  
      const cards = document.querySelectorAll('.card');
  
      cards.forEach(card => {
        card.style.display = 'none';
      })
      
      this.tabElement.classList.add('active-tab');
    
      this.cards.forEach(card => card.selectCard());
    }
  
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style.display = 'flex';
    }
  
  }
  

  let tabs = document.querySelectorAll('.tab').forEach(tab =>  new TabLink(tab));
  
  console.log(tabs)
  