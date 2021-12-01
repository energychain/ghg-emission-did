const ghgemissiondid = function(config) {
  if(config == null) throw "First argument needs to be an object not null";
  if(typeof config !== 'object') throw "First argument needs to be an object";

  if((typeof config.co2eq == 'undefined')||(isNaN(config.co2eq))) throw "config.co2eq needs to be a number with gram of co2 emission";
  if(typeof config.scope == 'undefined') config.scope = '3';
  if(typeof config.category == 'undefined') config.category = 'undefined';
  if(typeof config.title == 'undefined') config.title = 'No Title';

  const EthrDID = require("ethr-did").EthrDID;
  if(typeof config.keypair == 'undefined') {
    config.keypair = EthrDID.createKeyPair();
  }

  const ethrDid = new EthrDID(config.keypair);
  delete config.keypair;
  const parent =this;

  this._main = async function() {
    let jwt = await ethrDid.signJWT(config);
    parent._jwt = jwt;
  }

  this._main();

  this.getJWT = async function() {
    if(typeof parent._jwt == 'undefined') {
      await parent._main();
    }
    return parent._jwt;
  }
}

module.exports = ghgemissiondid;
