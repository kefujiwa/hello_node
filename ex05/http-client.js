// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-client.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/09 00:47:48 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/09 01:23:23 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require("http");

if (process.argv.length == 3)
{
	try {
		http.get(process.argv[2], function (res) {
			res.on('data', function (chunk) {
				console.log(chunk.toString());
			});
			res.on('error', function (err) {
				console.error(err.message);
			});
		}).on('error', function (err) {
			console.error(err.message);
		});
	} catch (error) {
		console.error(error.message);
	}
}
