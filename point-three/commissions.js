'use strict';

const commissions = {
	monthly: function() {
		let commission = 0;
		let discount = 0;

		const amount = (amount.to_f / investment_round.periods).round(2);
		const wallet_amount = (wallet_amount.to_f / investment_round.periods).round(2);

		const code_present = code.present;
		const fee_present = investment_round.pb_player_fee.present;

		if (code_present && fee_present) {
			discount = (((investment_round.pb_player_fee.to_f/100) * code.discount) / 100)
			commission = (monthly_amount - monthly_wallet_amount) * ((investment_round.pb_player_fee.to_f/100) - discount)
		} else if (!code_present && fee_present) {
			commission = ((monthly_amount - monthly_wallet_amount) * investment_round.pb_player_fee.to_f/100)
		} else if (code_present && !fee_present) {
			discount   = ((0.05 * code.discount) / 100)
			commission = (monthly_amount - monthly_wallet_amount) * (0.05 - discount)
		} else {
			commission = ((monthly_amount - monthly_wallet_amount) * 0.05)
		}

		commission = commission + (commission * 0.16);
		return commission;
	},

	discount: function() {

	}
};

console.log(commissions);