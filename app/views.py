from flask import render_template, request, jsonify

from app import app

from googletrans import Translator

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/about')
def about():
	return render_template("about.html")

@app.route('/process', methods=['POST'])
def process():
	sentence = request.form.get('result')
	if sentence:
		translator = Translator()

		af = translator.translate(sentence, src='en', dest='af').text
		de = translator.translate(af, src='af', dest='de').text
		pt = translator.translate(de, src='de', dest='pt').text
		pl = translator.translate(pt, src='pt', dest='pl').text
		zh = translator.translate(pl, src='pl', dest='zh-cn').text
		fr = translator.translate(zh, src='zh-cn', dest='fr').text
		fi = translator.translate(fr, src='fr', dest='fi').text
		it = translator.translate(fi, src='fi', dest='it').text
		tr = translator.translate(it, src='it', dest='tr').text
		en = translator.translate(tr, src='tr', dest='en').text
    	
		return jsonify({'af': af, 'de': de, 'pt': pt, 'pl': pl, 'zh': zh, 'fr': fr, 'fi': fi, 'it': it, 'tr': tr, 'en': en})

	return jsonify({'error': 'Please type something in first.'})