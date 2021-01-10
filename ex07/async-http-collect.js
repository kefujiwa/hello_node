// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   async-http-collect.js                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/09 01:11:48 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/10 21:29:33 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require("http");

if (process.argv.length == 5)
{
	var array = new Array();
	asyncCall();
}

async function asyncCall() {
	for (let i = 2; i < 5; i++) {
		array.push(request(process.argv[i]));
	}
	Promise.all(array)
	.then(function(htmls) {
		for (let i = 0; i < htmls.length; i++) {
			const html = htmls[i];
			console.log(html);
		}
	})
	.catch(function(err) {
		console.error(err.message);
	});
}

function request(url) {
	return new Promise(function(resolve, reject) {
		let line = '';
		http.get(url, function(res) {
			res.on('data', function(chunk) {
				line += chunk;
			});
			res.on('end', function() {
				resolve(line);
			});
			res.on('error', function(err) {
				reject(err);
			});
		}).on('error', function(err) {
			reject(err);
		});
	});
}
