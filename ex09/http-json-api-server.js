// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   http-json-api-server.js                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/09 23:49:29 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/10 21:18:10 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require('http');
const url = require('url'); //urlの文字列を扱うため

const server = http.createServer(function(req, res) {
	res.on('error', function(err) {
		console.error(err.message);
	}

	if (req.method == 'GET')
	{
		let urlParts = url.parse(req.url, true);
		let date = Date.parse(urlParts.query.iso);
		let resData = '';
		switch (urlParts.pathname) {
			case '/api/parsetime':
				date = new Date(date);
				resData = JSON.stringify({
					"hour": date.getUTCHours(),
					"minute": date.getUTCMinutes(),
					"second": date.getUTCSeconds()
				});
				break;
			case '/api/unixtime':
				resData = JSON.stringify({"unixtime": date});
				break;
			default:
				res.writeHead(404, {'Content-Type': 'text/plain'});
				res.end('Invalid path\n');
				return;
		}
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(resData + '\n');
		res.end();
	}
	else
	{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Invalid method\n');
	}
}).on('error', function(err) {
	console.error(err.message);
});

if (process.argv.length == 3)
{
	const port = parseInt(process.argv[2]);
	try {
		server.listen(port);
	} catch (error) {
		console.error(error.message);
	}
}
