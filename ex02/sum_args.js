// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   sum_args.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/08 03:58:49 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/08 04:05:11 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

let total = parseInt(0);

for(let i = 2; i < process.argv.length; i++) {
	total += parseInt(process.argv[i]);
}

console.log(total);
