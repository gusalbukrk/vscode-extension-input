import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', async () => {
		vscode.window.showInformationMessage('Hello world!');

		// // `window.showQuickPick` is easier but `window.createQuickPick` is more flexible
		// const a = await vscode.window.showQuickPick(
		// 	['one', 'two', 'three'],
		// 	{ // https://code.visualstudio.com/api/references/vscode-api#QuickPickOptions
		// 		canPickMany: true,
		// 		title: 'My QuickPick Title',
		// 		placeHolder: 'My QuickPick PlaceHolder',
		// 		// ignoreFocusOut: true, // keep the picker open when focus moves to another part of the editor or to another window

		// 		// invoked whenever an item is highlighted
		// 		// onDidSelectItem: item => console.log(item + ' was selected'),
		// 	}
		// );
		// console.log(a);

		// const b = await vscode.window.showQuickPick([
		// 	{ label: 'one', description: 'description 1' },
		// 	{ label: 'two', description: 'description 2' },
		// 	{ label: 'three', description: 'description 3' },
		// ], {
		// 	matchOnDescription: true, // include the description when filtering the picks
		// });
		// console.log(b);

		// // `createQuickPick` returns a `QuickPick` object
		// // https://code.visualstudio.com/api/references/vscode-api#QuickPick&lt;T&gt;
		// const qp = vscode.window.createQuickPick();
		// qp.title = 'My QuickPick Title';
		// qp.placeholder = 'My QuickPick PlaceHolder';
		// qp.canSelectMany = true;
		// qp.items = [ { label: 'foo' }, { label: 'bar' }, { label: 'baz' } ];
		// qp.onDidAccept( () => { // triggered when `Enter` is pressed
		// 	console.log('accepted');
		// 	qp.hide();
		// 	console.log(qp.selectedItems);
		// 	qp.dispose();
		// });
		// qp.show();

		// `window.showInputBox` is easier but `window.createInputBox` is more flexible
		const x = await vscode.window.showInputBox({
			title: 'Input box title',
			prompt: 'Input box prompt',
			placeHolder: 'Input box placeHolder',
			
			// value: 'mydefaultvalue',
			// valueSelection: [2, 9], // select a range of text in the input box

			// ignoreFocusOut: true,
			// password: true, // show password input (i.e. hide the input)
			
			// must return either:
			// - human-readable string which is presented as an error message or an InputBoxValidationMessage
			// - undefined or null to indicate that the value is valid
			validateInput: (input) => /^\w+$/.test(input) ? null : 'Not a valid input',
		});
		console.log(x);

		const ib = vscode.window.createInputBox();
		ib.title = "My InputBox Title";
		// ib.step = 1; // this number is show between parentheses after title
		ib.show();
		ib.onDidAccept( () => {
			console.log(ib.value);
			ib.hide();
			ib.dispose();
		});
	}));
}

export function deactivate() {}
