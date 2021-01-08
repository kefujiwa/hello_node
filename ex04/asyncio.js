// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   asyncio.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/08 23:49:15 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/09 03:48:44 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const fs = require('fs');

let total = 0;
if (process.argv.length == 3)
{
	fs.readFile(process.argv[2], function(err, contents) {
		if (err)
			console.error(err.message);
		else
			total = contents.toString().split('\n').length - 1;
		console.log(total);
	});
}
