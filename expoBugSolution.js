The exact cause of these random crashes can vary, so a comprehensive solution is difficult to provide in a single example.  However, common causes and troubleshooting steps include:

1. **Check for memory leaks:**  Large or complex applications can sometimes cause memory exhaustion.  Profile your application to identify areas with potential memory leaks. Consider using tools like Chrome DevTools or React Profiler.
2. **Examine console logs:** Even without terminal errors, browser console logs might provide clues about exceptions or warnings that might contribute to instability.
3. **Simplify your app (temporarily):**  Create a minimal reproducible example to isolate the potential problematic code.
4. **Check for native modules compatibility:** If you're using native modules, ensure they're compatible with your Expo SDK version.
5. **Update Expo and dependencies:** Keep your Expo CLI, SDK, and project dependencies updated to benefit from bug fixes and performance improvements.
6. **Restart your machine:**  Sometimes a simple restart can clear up transient issues.
7. **Check for issues with your project configuration:** Make sure that configuration files (like `app.json` or `package.json`) are valid and do not contain any errors. 
8. **Review your code for potential infinite loops or other logic errors:** These can put extra strain on the system and cause unexpected behavior.