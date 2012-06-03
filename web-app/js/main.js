window.onload = function() {
		  
	
	var editor1 = ace.edit("editor1");
	editor1.setTheme("ace/theme/clouds");
	editor1.getSession().setMode("ace/mode/groovy");

	var commands1 = editor1.commands;

	commands1.addCommand({
		name : "save1",
		bindKey : {
			win : "Ctrl-S",
			mac : "Command-S",
			sender : "editor1"
		},
		exec : function() {
			var value = editor1.getSession().getValue();
			submitForm(value, "#output1");
		}
	});

	var editor2 = ace.edit("editor2");
	editor2.setTheme("ace/theme/clouds");
	editor2.getSession().setMode("ace/mode/groovy");

	var commands2 = editor2.commands;

	commands2
			.addCommand({
				name : "save2",
				bindKey : {
					win : "Ctrl-S",
					mac : "Command-S",
					sender : "editor2"
				},
				exec : function() {
					var value = editor2.getSession().getValue();
					value += "import groovy.lang.Script;\nimport org.codehaus.groovy.control.CompilerConfiguration\n";
					submitForm(value, "#output2");
				}
			});

	commands2.addCommand({
		name : "step1",
		bindKey : {
			win : "1",
			mac : "1",
			sender : "editor2"
		},
		exec : function() {
			var value = "abstract class SurveyScript extends Script {\n"
					+ "  def ask  = {String question -> println question }\n"
					+ "}";
			editor2.gotoLine(1);
			editor2.insert(value);
		}
	});

	commands2.addCommand({
		name : "step2",
		bindKey : {
			win : "2",
			mac : "2",
			sender : "editor2"
		},
		exec : function() {
			editor2.gotoLine(9);
			editor2.removeLines();
			editor2.removeLines();
			editor2.removeLines();
		}
	});

	commands2
			.addCommand({
				name : "step3",
				bindKey : {
					win : "3",
					mac : "3",
					sender : "editor2"
				},
				exec : function() {
					var value = "def compilerConfiguration = new CompilerConfiguration()\n"
							+ "compilerConfiguration.scriptBaseClass = SurveyScript.class.name\n"
							+ "def binding = new Binding()\n";
					editor2.gotoLine(5);
					editor2.insert(value);
				}
			});

	commands2
			.addCommand({
				name : "step4",
				bindKey : {
					win : "4",
					mac : "4",
					sender : "editor2"
				},
				exec : function() {
					editor2.gotoLine(8);
					editor2.removeLines();
					var value = "def shell = new GroovyShell(this.class.classLoader, binding, compilerConfiguration)\n"
					editor2.gotoLine(8);
					editor2.insert(value);
				}
			});

	var editor3 = ace.edit("editor3");
	editor3.setTheme("ace/theme/clouds");
	editor3.getSession().setMode("ace/mode/groovy");

	var commands3 = editor3.commands;

	commands3
			.addCommand({
				name : "save3",
				bindKey : {
					win : "Ctrl-S",
					mac : "Command-S",
					sender : "editor3"
				},
				exec : function() {
					var value = editor3.getSession().getValue();
					value += "import groovy.lang.Script;\nimport org.codehaus.groovy.control.CompilerConfiguration\n";
					submitForm(value, "#output3");
				}
			});

	commands3.addCommand({
		name : "step1",
		bindKey : {
			win : "1",
			mac : "1",
			sender : "editor3"
		},
		exec : function() {
			var value = "ask \"what is your name?\" into name\n"
					+ "ask \"what is your birthdate?\" into date\n";
			editor3.gotoLine(17);
			editor3.removeLines();
			editor3.insert(value);
		}
	});

	commands3.addCommand({
		name : "step2",
		bindKey : {
			win : "2",
			mac : "2",
			sender : "editor3"
		},
		exec : function() {
			var value = "    return this\n";
			editor3.gotoLine(4);
			editor3.insert(value);
		}
	});

	commands3.addCommand({
		name : "step3",
		bindKey : {
			win : "3",
			mac : "3",
			sender : "editor3"
		},
		exec : function() {
			editor3.gotoLine(6);
			var value = "  def into(variable) {\n" + "  }\n";
			editor3.insert(value);
		}
	});

	commands3.addCommand({
		name : "step4",
		bindKey : {
			win : "4",
			mac : "4",
			sender : "editor3"
		},
		exec : function() {
			editor3.gotoLine(2);
			var value = "  def map = [:]\n";
			editor3.insert(value);
		}
	});

	commands3.addCommand({
		name : "step5",
		bindKey : {
			win : "5",
			mac : "5",
			sender : "editor3"
		},
		exec : function() {
			editor3.gotoLine(2);
			var value = "  def i = 1;\n";
			editor3.insert(value);
			editor3.gotoLine(5);
			editor3.removeLines();
			value = "    map[\"question$i\"] = question\n";
			editor3.insert(value);
			editor3.gotoLine(9);
			value = "    map[\"variable$i\"] = variable\n    i++\n";
			editor3.insert(value);
		}
	});

	commands3.addCommand({
		name : "step6",
		bindKey : {
			win : "6",
			mac : "6",
			sender : "editor3"
		},
		exec : function() {
			editor3.gotoLine(12);
			var value = "  def propertyMissing(def propertyName) {\n"
					+ "    propertyName\n" + "  }\n";
			editor3.insert(value);
			editor3.gotoLine(29);
			var value = "println map\n";
			editor3.insert(value);
			editor3.scrollToRow(1);
			editor3.setHighlightActiveLine(true);
		}
	});

	var editor4 = ace.edit("editor4");
	editor4.setTheme("ace/theme/clouds");
	editor4.getSession().setMode("ace/mode/groovy");
	
	var commands4 = editor4.commands;

	commands4.addCommand({
		name : "save4",
		bindKey : {
			win : "Ctrl-S",
			mac : "Command-S",
			sender : "editor4"
		},
		exec : function() {
			var value = editor4.getSession().getValue();
			value += "import groovy.lang.Script;\nimport org.codehaus.groovy.control.CompilerConfiguration\n";
			submitForm(value, "#output4");
		}
	});

	commands4.addCommand({
		name : "step1",
		bindKey : {
			win : "1",
			mac : "1",
			sender : "editor4"
		},
		exec : function() {
			editor4.gotoLine(31);
			editor4.removeLines();
			editor4.removeLines();
			var value = "ask \"what is your name?\" assign into name\nask \"what is your birthdate?\" assign into date\n"
			editor4.insert(value);
		}
	});

	commands4.addCommand({
		name : "step2",
		bindKey : {
			win : "2",
			mac : "2",
			sender : "editor4"
		},
		exec : function() {
			editor4.gotoLine(11);
			editor4.removeLines();
			editor4.removeLines();
			editor4.removeLines();
			editor4.removeLines();
			var value = "  def assign(into) {\n  }\n"
			editor4.insert(value);
		}
	});
	
	commands4.addCommand({
		name : "step3",
		bindKey : {
			win : "3",
			mac : "3",
			sender : "editor4"
		},
		exec : function() {
			editor4.gotoLine(12);
			var value = "    [:].withDefault { variable ->\n      map[\"variable$j\"] = variable\n      j++\n    }\n";
			editor4.insert(value);
		}
	});
	
	commands4.addCommand({
		name : "step4",
		bindKey : {
			win : "4",
			mac : "4",
			sender : "editor4"
		},
		exec : function() {
			editor4.gotoLine(4);
			var value = "  def j = 1\n"
			editor4.insert(value);
			editor4.gotoLine(9);
			var value = "    i++\n"
			editor4.insert(value);
		}
	});
	
	var editor5 = ace.edit("editor5");
	editor5.setTheme("ace/theme/clouds");
	editor5.getSession().setMode("ace/mode/groovy");
	
	var commands5 = editor5.commands;

	commands5.addCommand({
		name : "save5",
		bindKey : {
			win : "Ctrl-S",
			mac : "Command-S",
			sender : "editor5"
		},
		exec : function() {
			var value = editor5.getSession().getValue();
			value = "import groovy.lang.Script;\nimport org.codehaus.groovy.control.CompilerConfiguration\n"
			+"import org.codehaus.groovy.ast.*\n"
			+"import org.codehaus.groovy.ast.expr.*\n"
			+"import org.codehaus.groovy.ast.stmt.*\n"
			+"import org.codehaus.groovy.classgen.GeneratorContext\n"
			+"import org.codehaus.groovy.control.CompilationFailedException\n"
			+"import org.codehaus.groovy.control.CompilePhase\n"
			+"import org.codehaus.groovy.control.CompilerConfiguration\n"
			+"import org.codehaus.groovy.control.SourceUnit\n"
			+"import org.codehaus.groovy.control.customizers.*\n"
			+"import org.codehaus.groovy.ast.builder.AstBuilder\n"
			+"import org.codehaus.groovy.syntax.Token\n"
			+"import org.codehaus.groovy.syntax.Types\n"
			+"import static org.objectweb.asm.Opcodes.ACC_PUBLIC\n" + value;
			submitForm(value, "#output5");
		}
	});

	commands5.addCommand({
		name : "step1",
		bindKey : {
			win : "1",
			mac : "1",
			sender : "editor5"
		},
		exec : function() {
			editor5.gotoLine(14);
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.removeLines();
			editor5.gotoLine(5);
			var value = "def counter = 1;\n" +
						"def inputs = [:]\n" +
						"def variables = [:]\n" +
						"def questions = [:]\n" +
						"inputs.put(\"counter\", counter)\n" +
						"inputs.put(\"variables\",variables)\n" +
						"inputs.put(\"questions\",questions)\n" +
						"binding.setVariable(\"inputs\", inputs);\n\n";
			editor5.insert(value);
		}
	});

	commands5.addCommand({
		name : "step2",
		bindKey : {
			win : "2",
			mac : "2",
			sender : "editor5"
		},
		exec : function() {
			editor5.gotoLine(15);
			var value = "shell.evaluate  '''\n" +
						"ask \"what is your name?\" assign into name\n" +
						"ask \"what is your birthdate?\" assign into date\n" +
						"'''\n";
						
			editor5.insert(value);
		}
	});
	
	commands5.addCommand({
		name : "step3",
		bindKey : {
			win : "3",
			mac : "3",
			sender : "editor5"
		},
		exec : function() {
			editor5.gotoLine(2);
			var value = "configuration.addCompilationCustomizers(new MyCustomizer())\n";
			editor5.insert(value);
		}
	});	
	
	commands5.addCommand({
		name : "step4",
		bindKey : {
			win : "4",
			mac : "4",
			sender : "editor5"
		},
		exec : function() {
			editor5.gotoLine(25);
			var value = "public class MyCustomizer extends CompilationCustomizer {\n" +
"  def methodCalls = []\n\n" +
"  public MyCustomizer() {\n" +
"    super(CompilePhase.CONVERSION);\n" +
"  }\n\n" +
"  @Override\n" +
"  public void call(final SourceUnit source, final GeneratorContext context, final ClassNode classNode) throws CompilationFailedException {\n" +
"    def ast = source.getAST();\n" +
"    def myClassNode\n" +
"    BlockStatement runBlock\n" +
"    ast.classes.each {\n" +
"      myClassNode = it\n" +
"      it.methods.each {\n" +
"        if(it.code instanceof BlockStatement && it.name==\"run\"){\n" +
"          runBlock = it.code\n" +
"          runBlock.statements.each { methodCalls << it }\n" +
"          runBlock = new BlockStatement()\n" +
"          def dispatcherCall = new MethodCallExpression(\n" +
"              new VariableExpression(\"this\"),\n" +
"              new ConstantExpression(\"dispatch\"),\n" +
"              new ArgumentListExpression([]))\n" +
"          runBlock.addStatement(new ReturnStatement(dispatcherCall))\n" +
"          it.code=runBlock\n" +
"        }\n" +
"      }\n\n" +
"      //let's create the methods\n" +
"      def step = 0\n" +
"      methodCalls.each{\n" +
"        BlockStatement methodCodeBlock = new BlockStatement()\n" +
"        methodCodeBlock.addStatement(it)\n" +
"        myClassNode.addMethod(\"doStep_\" + step, 1, null,[] as Parameter[], [] as ClassNode[],\n" +
"        methodCodeBlock)\n" +
"        step++\n" +
"      }\n" +
"      runBlock = new BlockStatement()\n" +
"    }\n" +
"  }\n" +
"}\n";
			editor5.insert(value);
		}
	});	
	
	commands5.addCommand({
		name : "step5",
		bindKey : {
			win : "5",
			mac : "5",
			sender : "editor5"
		},
		exec : function() {
			editor5.gotoLine(83);
			var value = "\n  void dispatch() {\n" +
			"    this.class.getMethod(\"doStep_$inputs.counter\").invoke(this)\n" +
			"  }\n";
		    editor5.insert(value);
		}
	});
	
	
	var editor6 = ace.edit("editor6");
	editor6.setTheme("ace/theme/clouds");
	editor6.getSession().setMode("ace/mode/groovy");

	var commands6 = editor6.commands;

	commands6.addCommand({
		name : "save6",
		bindKey : {
			win : "Ctrl-S",
			mac : "Command-S",
			sender : "editor6"
		},
		exec : function() {
			var value = editor6.getSession().getValue();
			var title = $('#titleCreate').val();			
			submitCreateForm(title, value, "#output6");
		}
	});
	
	commands6.addCommand({
		name : "step",
		bindKey : {
			win : "1",
			mac : "1",
			sender : "editor6"
		},
		exec : function() {
			var value = editor6.getSession().getValue();
			var value = "ask \"Tell us about yourself?\" assign to presentation\n" +
"ask \"What will you be speaking about at GR8Conf?\" assign to talkContent\n" +
"ask \"How did you get started with Groovy?\" assign to groovyStart\n" +
"ask \"What other sessions would you attend at GR8Conf?\" assign to session\n" +
"ask \"What else can you tell the reader?\" assign to message\n"; 
			editor6.insert(value);
		}
	});
	
	

}
	
function submitCreateForm(title, input, output) {
	var url = "http://localhost:8080/DslPrez/survey/create?=";
	//var url = "http://dslprez.cloudfoundry.com/DslPrez/survey/create?=";
	$.post(url, {
		title:"myScript", content:input
	},function (data) {
		$("#displayQuestion").removeData();
		$('.displayAnswer').remove();
		$(".surveystart").show();
		$("#displayQuestion").data('scriptId',data.id);
		$("#displayQuestion").data('scriptContent',data.content);
		$('#scriptContent').text(data.content)
		$('#submitButton').click();
	});
}




		
function submitForm(input, output) {

	//var url = "http://dslprez.cloudfoundry.com/console/execute?=";
	var url = "http://localhost:8080/DslPrez/console/execute?=";
	$.post(url, {
		content : input
	}, function(data) {
		var value = "";
		if (data.stacktrace === "" || data.stacktrace.buffer !== undefined) {
			value = data.result;
		} else {
			value = data.stacktrace;
		}
		$(output).text(value);
		impress().next();
	});
}

// id:1, action:run, controller:survey
// id:1, lastAssignement:name, counter:1, answer:jjjjj, answerMap:{}, action:run, controller:survey -->

$('#submitButton').bind('click', function() {
	var answer = $('#answer').val();
	$('#answer').val('');
	var answerMap = $("#displayQuestion").data('answerMap');
	var scriptId = $("#displayQuestion").data('scriptId');
	var counter = $("#displayQuestion").data('counter');
	var lastAssignement = $("#displayQuestion").data('lastAssignement');
	if (answerMap)
	  answerMap[lastAssignement] = answer;
	var stringAnswerMap = JSON.stringify(answerMap)
	var url = "http://localhost:8080/DslPrez/survey/run?=";
	//var url = "http://dslprez.cloudfoundry.com/survey/run?=";
	
	$.post(url, {
		scriptId:scriptId, lastAssignement:lastAssignement, counter:counter, answer:answer, answerMap:stringAnswerMap
	}, function(data) {

		var answerMap = data.answerMap;
		var counter= data.counter;
		var lastAssignement = data.lastAssignement;
		$("#displayQuestion").data('answerMap',answerMap);
		$("#displayQuestion").data('counter',counter);
		$("#displayQuestion").data('lastAssignement',lastAssignement);
		if(data.finished==true) {
			var index = 1;
			$(".surveystart").hide();
			for (answer in answerMap) {
				var output6Value = '<div class="displayAnswer">For variable ' + answer +', answer is '+answerMap[answer] +'</div>';
			  $("#output6").append(output6Value);
			  index++;
			}
		} else {
			$("#displayQuestion").text(data.question);
		}
	});
});

var settings = {
        "size" : {
            "grid" : 8
        },
        "options" : {
            "color" : "random-dark",
            "printMultiplier" : 3
        },
        "shape" : "square"
    }
$("#wordcloud").awesomeCloud( settings );

$("#technologies").airport([ 'impress.js', 'grails', 'Ace editor', 'jQuery' ]);