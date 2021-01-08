// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   vars.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: kefujiwa <kefujiwa@student.42tokyo.jp>     +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2021/01/08 03:24:52 by kefujiwa          #+#    #+#             //
//   Updated: 2021/01/08 03:50:45 by kefujiwa         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const	str = "42";
const	num = 42;
const	obj = new Object(42);
const	empty = new Object();
const	bool = true;
let		undef;

console.log(str, "is a", typeof str + ".");
console.log(num, "is a", typeof num + ".");
console.log(`${obj} is an ${typeof obj}.`);
console.log(`${empty} is an ${typeof empty}.`);
console.log(bool, "is a", typeof bool + ".");
console.log(undef, "is an", typeof undef + ".");
