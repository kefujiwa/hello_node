// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   time-server.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/09 03:25:53 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/09 23:46:58 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const net = require('net');

const server = net.createServer(function(conn) {
	conn.on('data', function(data) {
		let dateNow = formatDate(new Date()) + '\n';
		conn.write(dateNow);
		conn.end();
	});
	conn.on('close', function() {
		console.log("client closed connection");
	});
	conn.on('error', function(err) {
		console.error(err.message);
	});
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

function formatDate(date) {
	const year = date.getFullYear();
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	const hour = ("0" + date.getHours()).slice(-2);
	const min = ("0" + date.getMinutes()).slice(-2);
	return `${year}-${month}-${day} ${hour}:${min}`;
}
