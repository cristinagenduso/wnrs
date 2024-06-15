export const getRawQuestion = (question) => {
	let _question = question.replaceAll("\n", "");
	const _ownItRegex = new RegExp("\\[([^\\]]+)\\]\\(([^)]+)\\)", "g");
	_question = _question.replaceAll(_ownItRegex, (match, p1, p2) => p2);
	const _hboRegex = new RegExp(" <(.+)>", "g");
	return _question.replaceAll(_hboRegex, "");
};
