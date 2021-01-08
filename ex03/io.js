// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   io.js                                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/08 04:05:56 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/09 03:48:12 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const fs = require('fs');

let total = 0;
if (process.argv.length == 3) {
	try {
		let contents = fs.readFileSync(process.argv[2]).toString();
		for (let i = 0; i < contents.length; i++) {
			if (contents[i] == '\n') {
				total++;
			}
		}
		console.log(total);
	} catch (error) {
		console.error(error.message);
	}
}
