  import 'package:flutter/material.dart';

  class HomeScreen extends StatelessWidget {
    const HomeScreen({Key? key}) : super(key: key);

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        backgroundColor: const Color(0xFF003249),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                'assets/imgs/logo.png',
                width: 200,
                height: 200,
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: 200,
                height: 50,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.black,
                    backgroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                  ),
                  icon: Image.asset('assets/imgs/logo.png', height: 24),
                  label: const Text('بحاجة لسماعدة ؟',
                      style: TextStyle(fontSize: 20)),
                ),
              ),
              const SizedBox(height: 25),
              SizedBox(
                width: 200,
                height: 50,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.black,
                    backgroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                  ),
                  icon: Image.asset('assets/imgs/logo.png', height: 24),
                  label: const Text('طلبات المساعدة',
                      style: TextStyle(fontSize: 20)),
                ),
              ),
            ],
          ),
        ),
      );
    }
  }
