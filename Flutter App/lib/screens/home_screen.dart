import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  static const _logoAssetPath = 'assets/imgs/logo.png';

  ElevatedButton _buildElevatedButton(BuildContext context, String label) {
    return ElevatedButton.icon(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        foregroundColor: Colors.black,
        backgroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
      ),
      icon: Image.asset(_logoAssetPath, height: 24),
      label: Text(
        label,
        style: const TextStyle(fontSize: 20),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF003249),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              _logoAssetPath,
              width: 200,
              height: 200,
            ),
            const SizedBox(height: 24),
            SizedBox(
              width: 200,
              height: 50,
              child: _buildElevatedButton(context, 'بحاجة لسماعدة ؟'),
            ),
            const SizedBox(height: 25),
            SizedBox(
              width: 200,
              height: 50,
              child: _buildElevatedButton(context, 'طلبات المساعدة'),
            ),
          ],
        ),
      ),
    );
  }
}
