'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.example.biznet.Trade} trade
 * @transaction
 */
function onChangeAssetValue(trade) {
    trade.commodity.owner = trade.newOwner
    
    
    return getAssetRegistry('org.example.biznet.Commodity')
        .then(function(registry) {
            
            return registry.update(trade.commodity);
        });
    }
        