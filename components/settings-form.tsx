"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateSettings } from "@/app/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SettingsForm({
  initial,
}: {
  initial: { dailyGoalXp: number; showStress: boolean; showTranslitKeyboard: boolean };
}) {
  const [goal, setGoal] = useState(String(initial.dailyGoalXp));
  const [stress, setStress] = useState(initial.showStress);
  const [translit, setTranslit] = useState(initial.showTranslitKeyboard);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    const parsed = Math.max(5, Math.min(200, Number(goal) || 20));
    const r = await updateSettings({
      dailyGoalXp: parsed,
      showStress: stress,
      showTranslitKeyboard: translit,
    });
    if (r.ok) toast.success("Settings saved");
    setSaving(false);
  }

  return (
    <div className="max-w-xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Daily goal</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="goal" className="mb-2 block text-sm text-muted-foreground">
            XP per day (a lesson ≈ 15–25 XP)
          </Label>
          <div className="flex items-center gap-2">
            <Input id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-24" />
            <span className="text-sm text-muted-foreground">XP</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Learning aids</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Stress marks</p>
              <p className="text-xs text-muted-foreground">Show ударе́ние marks on Russian words</p>
            </div>
            <Switch checked={stress} onCheckedChange={setStress} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Transliteration IME</p>
              <p className="text-xs text-muted-foreground">
                Type Latin (zh, sh, ya…) to get ж, ш, я in drills
              </p>
            </div>
            <Switch checked={translit} onCheckedChange={setTranslit} />
          </div>
        </CardContent>
      </Card>

      <Button onClick={save} disabled={saving}>
        {saving ? "Saving…" : "Save settings"}
      </Button>
    </div>
  );
}
