const React = require('react');

const icon = require('./icon.png');

const { search, shellCommand } = require('cerebro-tools')

const order = 10
const fn = ({ term, actions, display }) => {

    const result = {
    	icon,
    	order,
      title: 'Buscar en humanOS: '+term,
      subtitle: "https://humanos.uci.cu",
      term,      
      onSelect: () => actions.open("https://humanos.uci.cu/search/"+term)
    }

    display(result)
  
}

module.exports = { fn }