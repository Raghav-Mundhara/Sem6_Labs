import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final _formKey = GlobalKey<FormState>();
  RegExp passwordRegex = RegExp(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$');
  RegExp emailRegex = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal[100],
      appBar: AppBar(
        title: const Text('Form Validation'),
        centerTitle: true,
        backgroundColor: Colors.teal[400],
        elevation: 100,
        shadowColor: Colors.black,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Center(
            child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                decoration: InputDecoration(
                    labelText: 'Enter your username',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10.0))),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter your username';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 10),
              TextFormField(
                decoration: InputDecoration(
                    labelText: 'Enter your password',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10.0))),
                validator: (value) {
                  if (!passwordRegex.hasMatch(value!)) {
                    return 'Please Enter A Valid Password';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 10),
              TextFormField(
                decoration: InputDecoration(
                    labelText: 'Enter your email',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10.0))),
                validator: (value) {
                  if (!emailRegex.hasMatch(value!)) {
                    return 'Please Enter A Valid Email';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 10),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Processing Data')));
                  }
                },
                child: const Text('Submit'),
              ),
            ],
          ),
        )),
      ),
    );
  }
}
