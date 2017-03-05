/*
 * Copyright (C) 2017 Stefano D'Angelo <zanga.mail@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

var Kroton = {};

Kroton.Element = {};
Kroton.Element.delimiterLeft = null;
Kroton.Element.delimiterRight = null;
Kroton.Element.id = null;
Kroton.Element.class = null;

Kroton.Expression = Object.create(Kroton.Element);
Kroton.Expression.children = null;

Kroton.Text = Object.create(Kroton.Element);
Kroton.Text.italic = false;
Kroton.Text.bold = false;
Kroton.Text.big = false;
Kroton.Text.value = null;

Kroton.Space = Object.create(Kroton.Text);
Kroton.Space.value = " ";
Kroton.Space.size = 1;

Kroton.Script = Object.create(Kroton.Element);
Kroton.Script.main = null;
Kroton.Script.topLeft = null;
Kroton.Script.bottomLeft = null;
Kroton.Script.bottomRight = null;
Kroton.Script.topRight = null;
Kroton.Script.scaled = true;

Kroton.Stack = Object.create(Kroton.Element);
Kroton.Stack.main = null;
Kroton.Stack.over = null;
Kroton.Stack.under = null;
Kroton.Stack.scaled = true;
Kroton.Stack.mainStretched = false;
Kroton.Stack.overStretched = false;
Kroton.Stack.underStretched = false;
Kroton.Stack.shiftedByYMinMax = true;

Kroton.Root = Object.create(Kroton.Element);
Kroton.Root.radicand = null;
Kroton.Root.index = null;
Kroton.Root.scaled = true;

Kroton.Grid = Object.create(Kroton.Element);
Kroton.Grid.cells = null;
Kroton.Grid.centerAligned = true;
Kroton.Grid.verticalLines = null;
Kroton.Grid.horizontalLines = null;

Kroton.Multiline = Object.create(Kroton.Expression);

Kroton.Placeholder = Object.create(Kroton.Element);
Kroton.Placeholder.definition = null;

module.exports = Kroton;
