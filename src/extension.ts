import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', async () => {
		vscode.window.showInformationMessage('Hello world!');

		// `window.showQuickPick` is easier but `window.createQuickPick` is more flexible
		const a = await vscode.window.showQuickPick(
			['one', 'two', 'three'],
			{ // https://code.visualstudio.com/api/references/vscode-api#QuickPickOptions
				canPickMany: true,
				title: 'My QuickPick Title',
				placeHolder: 'My QuickPick PlaceHolder',
				// ignoreFocusOut: true, // keep the picker open when focus moves to another part of the editor or to another window

				// invoked whenever an item is highlighted
				// onDidSelectItem: item => console.log(item + ' was selected'),
			}
		);
		console.log(a);

		const b = await vscode.window.showQuickPick([
			{ label: 'one', description: 'description 1' },
			{ label: 'two', description: 'description 2' },
			{ label: 'three', description: 'description 3' },
		], {
			matchOnDescription: true, // include the description when filtering the picks
		});
		console.log(b);

		// `createQuickPick` returns a `QuickPick` object
		// https://code.visualstudio.com/api/references/vscode-api#QuickPick&lt;T&gt;
		const qp = await vscode.window.createQuickPick();
		qp.title = 'My QuickPick Title';
		qp.placeholder = 'My QuickPick PlaceHolder';
		qp.canSelectMany = true;
		qp.items = [ { label: 'foo' }, { label: 'bar' }, { label: 'baz' } ];
		qp.onDidAccept( () => { // triggered when `Enter` is pressed
			console.log('accepted');
			qp.hide();
			console.log(qp.selectedItems);
			qp.dispose();
		});
		qp.show();
	}));
}

export function deactivate() {}
