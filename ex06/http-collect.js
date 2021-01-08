// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-collect.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/09 01:01:50 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/09 01:04:43 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require("http");

if (process.argv.length == 3)
{
	try {
		http.get(process.argv[2], function (res) {
			let line = '';
			res.on('data', function (chunk) {
				line += chunk;
			});
			res.on('end', function () {
				console.log(line.length);
				console.log(line);
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
